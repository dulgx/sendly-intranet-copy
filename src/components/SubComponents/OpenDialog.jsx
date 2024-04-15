import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import newsData from "../../json-files/news-data.json";

const news = newsData;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function OpenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Сэндли ББСБ ХК Ногдол ашиг тараахаар боллоо. Сэндли ББСБ ХК нь 2023
            оны цэвэр ашгаас 20.6755 хувийг буюу 1,251,991,232.27 төгрөгийн
            ногдол ашгийг хувьцаа эзэмшигчиддээ 2024 оны 5 дугаар сарын 21-ний
            өдөр мөнгөн хэлбэрээр хуваарилахаар шийдвэрлэсэнээ өнөөдөр зарлалаа.
            Ингэснээр нэгж хувьцаанд ногдох ногдол ашгийн хэмжээ 5.60 төгрөг
            байх юм. “Сэндли ББСБ” ХК нь 2022 оны есдүгээр сард компанийнхаа
            29.97 хувийг олон нийтэд санал болгосноор нээлттэй хувьцаат компани
            болсон бөгөөд 2022 оны цэвэр ашгаас нэгж хувьцаанд ногдох хэмжээг
            2.75 төгрөгөөр тогтоож, нийт 614.8 сая төгрөгийг хувьцаа
            эзэмшигчиддээ олгож байсан бол энэ жил хувьцаа эзэмшигчиддээ олгож
            буй ногдол ашгийн хэмжээ өссөн байна.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
