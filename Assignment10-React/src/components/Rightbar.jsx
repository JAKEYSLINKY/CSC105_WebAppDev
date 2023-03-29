import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";



function Rightbar () {
  return (
    <Box display= {"flex"} flexDirection= {"column"}>
            <Typography mt={4} fontStyle={'bold'}>
                Lastest Photos
            </Typography>
            <ImageList sx={{ width: 300  }} cols={2}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
  );
}

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__480.jpg",
    title: "Dog1",
  },
  {
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1020%2C653%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg",
    title: "Dog2",
  },
  {
    img: "https://paradepets.com/.image/t_share/MTkxMzY1Nzg4MTM2NTE1MTcw/pomeranian-spitz-red-color-lies-on-the-carpet.jpg",
    title: "Dog3",
  },
  {
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B900%2C533%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg",
    title: "Dog4",
  },
];

export default Rightbar;
