import React from "react";
import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="h6" color="error">
        No photos found for this user.
      </Typography>
    );
  }

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "20px" }}>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${photo.file_name}`}
            alt="User photo"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Created on: {new Date(photo.date_time).toLocaleString()}
            </Typography>
            <Divider style={{ margin: "10px 0" }} />
            {photo.comments && photo.comments.length > 0 ? (
              <div>
                <Typography variant="h6">Comments:</Typography>
                {photo.comments.map((comment) => (
                  <div key={comment._id} style={{ marginBottom: "10px" }}>
                    <Typography variant="body2" color="textSecondary">
                      {new Date(comment.date_time).toLocaleString()}
                    </Typography>
                    <Typography variant="body1">
                      <Link to={`/users/${comment.user._id}`}>
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                    </Typography>
                    <Typography variant="body2">{comment.comment}</Typography>
                  </div>
                ))}
              </div>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments for this photo.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;