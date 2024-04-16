<?php
include("conf.php");

$data = array(); // Initialize an array to hold the data

$i = 0;
$result = ociparse($connhr, "SELECT s.br_id,
        s.br_name AS br_name,
        CASE WHEN sh.br_id = s.br_id THEN 1 ELSE 0 END is_salbar
    FROM hrwg01.st_branch s
        LEFT JOIN (
            SELECT SUBSTR (br_name, 1, 4) brno,
                MIN (br_id) br_id,
                MIN (br_name) br_name
            FROM hrwg01.st_branch
            WHERE status = 0
            GROUP BY SUBSTR (br_name, 1, 4)
        ) sh ON brno = s.br_id
        LEFT JOIN (
            SELECT br_id, COUNT (1) too
            FROM hrwg01.st_staffs
            WHERE status = 0 AND gestation <> 1
            GROUP BY br_id
        ) too ON too.br_id = s.br_id
    WHERE s.status = 0
    -- AND s.br_id NOT IN ( '10')
    ORDER BY s.br_name ASC ");
ociexecute($result, OCI_DEFAULT);

while (ocifetch($result)) {
    $pDepid = ociresult($result, "BR_ID");
    $pDepname = ociresult($result, "BR_NAME");
    $isSalbar = ociresult($result, "IS_SALBAR");

    // Constructing data array
    $data[$i]['id'] = $pDepid;
    $data[$i]['branch'] = $pDepname;
    $data[$i]['is_salbar'] = $isSalbar;

    $i++;
}

// Encode the data array to JSON format
$jsonData = json_encode($data);

// Output JSON data
header('Content-Type: application/json');
echo $jsonData;
?>