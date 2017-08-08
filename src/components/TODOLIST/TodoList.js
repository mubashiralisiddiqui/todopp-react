import React from 'react';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { List, ListItem } from 'material-ui/List';

export default class TodoList extends React.Component {
    render() {
        const { Todos } = this.props;
        const style = {
            ListItem: {
                width: 300,
                marginLeft: "30%",
            }
        }
        return (
            <div>
                <ul>
                    {Todos.map((text, index) => {
                        return (
                            <List key={index}>
                                <ListItem style={style.ListItem} primaryText={text.item} leftIcon={<ContentInbox />} />
                            </List>
                        )
                    })}
                </ul>
            </div>
        )
    }
}