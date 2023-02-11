import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import useStyles from './styles'

const Post = ({ post }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} style={{width:20, height:20}}/> 
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardContent className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <FontAwesomeIcon icon={faHeart} style={{width:17, height:17}}/> 
                    Liked {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                <FontAwesomeIcon icon={faTrash} style={{width:17, height:17}}/> 
                    Delete
                    </Button>
            </CardContent>
        </Card>
    );
}

export default Post;