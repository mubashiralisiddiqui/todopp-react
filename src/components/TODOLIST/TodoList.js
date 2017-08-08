import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

export default class TodoList extends React.Component {
    render() {
        const { Todos } = this.props;
        const style = {
            ListItem: {
                width: 300,
            }
        }
        return (
            <div>
                <ul>
                    {Todos.map((v, i) => {
                        return (
                            <List key={i}>
                                <ListItem style={style.ListItem} primaryText={v.item} leftIcon={<ContentInbox />} />
                            </List>
                        )
                    })}

                </ul>
            </div>
        )
    }
}
