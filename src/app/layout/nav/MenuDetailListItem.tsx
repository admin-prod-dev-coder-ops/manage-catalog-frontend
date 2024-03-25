import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@mui/material';
import { Link } from 'react-router-dom';

export function MenuDetailListItem({ text, iconName, path }: { text: string; iconName: string; path?: string }) {
  return (
    <ListItem key={text} disablePadding>
      {path ? ( // Check if path exists for a link
        <Link to={path}>
          <ListItemButton>
            <ListItemIcon>
              <Icon>{iconName}</Icon>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      ) : (
        <ListItemButton>
          <ListItemIcon>
            <Icon>{iconName}</Icon>
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      )}
    </ListItem>
  );
}