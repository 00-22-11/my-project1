import React, { FC } from 'react';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  id: number;
  name: string;
  image: string;
  origin: {
    name: string;
  };
}

export const CharacterCard: FC<Props> = ({ id, name, image, origin }): any => (
  <Card sx={{ width: 345 }}>
    <CardMedia component="img" height="140" image={image} alt={`Character${id}`} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {origin.name}
      </Typography>
    </CardContent>
    <CardActionArea>
      <CardActions>
        <Button size="small">Add</Button>
      </CardActions>
    </CardActionArea>
  </Card>
);
