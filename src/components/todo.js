import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Activity: {this.props.text}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Priority: {this.props.priority}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description: {this.props.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            responsible: {this.props.responsable[0]} ; {this.props.responsable[1]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Status: {this.props.status}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Duedate: {this.props.dueDate}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </div>
        );
    }

}