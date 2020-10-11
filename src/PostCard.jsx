import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';


const PostCard = (props) => {
    const {avatarSrc, title, date, id, imgSrc, desc } = props;

    return (
        <Card>
            <CardHeader
        avatar={
          <Avatar src={avatarSrc}/>
        }
        action={
          <IconButton aria-label="settings" href="https://youtube.com">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia style={{height:"200px"}}image={imgSrc}/>
      <CardContent>
        <Typography variant="body2" component="p">
            {id}
        </Typography>
        <br/>
        <Typography variant="body1" component="p">
            {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small" 
        color="primary" 
        variant="outlined">BUY NOW</Button>
        <Button 
        size="small"
        color="secondary"
        variant="outlined">READ NOW</Button>
      </CardActions>
    </Card>
    )
}

export default PostCard
