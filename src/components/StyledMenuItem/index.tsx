import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default StyledMenuItem