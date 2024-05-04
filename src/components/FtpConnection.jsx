import React, { useState } from "react";
import jsftp from "jsftp";

const ftpClient = new jsftp({
  host: "ftp://192.168.90.94",
  port: 21,
  user: "sendly",
  password: "Hello@123",
});

const listFiles = async () => {
  try {
    const files = ftpClient.list();
    console.log("Files:", files);
  } catch (error) {
    console.error("Error listing files:", error);
  }
};

const FtpConnection = () => {
  const [ftpConnection, setFtpConnection] = useState(null);

  const connectToFtp = async () => {
    try {
      const connection = await FtpClient.connect();
      setFtpConnection(connection);
    } catch (error) {
      console.error("Error connecting to FTP:", error);
    }
  };

  return (
    <div>
      <button onClick={connectToFtp}>Connect to FTP</button>
      {ftpConnection && (
        <div>
          <h2>Connected to FTP</h2>
          <ul>
            {ftpConnection.list().map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FtpConnection;
