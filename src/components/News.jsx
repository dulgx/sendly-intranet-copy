import React, { useState, useEffect } from "react";
import memoji from "../assets/Memoji.png";
import newsPhoto from "../assets/news.png";
import newsData from "../json-files/news-data.json";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const news = newsData;
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function News() {
  const [open, setOpen] = React.useState(false);
  const [newData, setNewData] = useState({
    newTitle: null,
    newDescription: null,
    newImage: null,
  });

  const handleClickOpen = (
    currentTitle,
    currentDescription,
    currentImageUrl
  ) => {
    setOpen(true);
    setNewData({
      newTitle: currentTitle,
      newDescription: currentDescription,
      newImage: currentImageUrl,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white sm:pb-2">
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((post, index) => (
            <article
              key={post.id}
              className="bg-gradient-to-r from-indigo-100 via-blue-50 to-red-50 flex max-w-xl flex-col items-start justify-between p-5 rounded-xl shadow-md"
            >
              <div className="flex justify-center w-full h-60">
                <img
                  src={post.photo}
                  alt="news-photo"
                  className=" m-2 rounded-lg"
                />
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 cursor-pointer">
                  <a
                    href={post.href}
                    onClick={() => {
                      handleClickOpen(post.title, post.description, post.photo);
                    }}
                    className="cursor-pointer"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4 w-full justify-between">
                <div className="flex">
                  <img
                    src={memoji}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>

                <div className="flex  gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
              </div>
              <React.Fragment>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">
                    {newData.newTitle}
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
                    <div className="flex justify-center w-full">
                      <img
                        src={newData.newImage}
                        alt="news-photo"
                        className=" m-2 rounded-lg"
                      />
                    </div>
                    <Typography gutterBottom className="p-4">
                      {newData.newDescription}
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      ХААХ
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </React.Fragment>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
