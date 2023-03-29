import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
function Content () {
  return (
    <Grid direction="column">
    <Box>
        <Typography variant="h4" mb={3}>
            Welcome Human !
        </Typography>
        <Typography variant="body1" mb={3}>
        Dogs are a beloved and popular pet for good reason. They provide companionship,
        physical activity, security, and an overall sense of joy and fulfillment.
        Dogs are social animals that have been bred to work alongside humans,
        and their loyalty and devotion make them wonderful companions.
        </Typography>

        <Typography variant="body1" mb={3}>
        However, owning a dog is a significant responsibility that should not
        be taken lightly. Dogs require a lot of care, attention, and training.
        It's important to research and select a breed that suits your lifestyle and needs,
        provide proper nutrition and exercise, and establish clear boundaries and rules.
        But with proper preparation and commitment, owning a dog can be a wonderful experience
        that enriches your life and brings endless love and happiness.
        </Typography>
    </Box>

    <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://paradepets.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Dog No.1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       BOX BOX BOX BOX BOX BOX
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={6}>
        <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        DOG No.2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    BOX BOX BOX BOX BOX BOX
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        DOG No.3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        BOX BOX BOX BOX BOX BOX BOX
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Grid>
  );
};

export default Content;
