import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

const CardProductos = ({ producto }) => {
    return (
        <NavLink to={`/item/${producto.id}`}>
            <Card
                sx={{
                    maxWidth: 345,
                    backgroundColor: "black",
                    color: "white",
                    marginTop: 10,
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={producto.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {producto.title}
                        </Typography>
                        <Typography variant="body2">
                            {producto.description}
                        </Typography>
                        <Typography>$ {producto.price}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </NavLink>
    );
};

export default CardProductos;
