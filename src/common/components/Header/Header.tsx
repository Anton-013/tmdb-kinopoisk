import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import logoUrl from '../../../assets/logo-tmdb.svg'
import { NavLink } from 'react-router'
import Switch from '@mui/material/Switch'
import { selectThemeMode, changeThemeModeAC } from '../../../app/app-slice'
import { PATH } from '../../constants/path'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import styles from './Header.module.css'

export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()

    const changeTheme = () => {
        dispatch(changeThemeModeAC({ themeMode: themeMode === 'dark' ? 'light' : 'dark' }))
    }

    return (
        <AppBar>
            <Toolbar>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <NavLink to={PATH.MAIN} ><img src={logoUrl} alt='TMDB' className={styles.img} /></NavLink>

                    <div className={styles.navLink}>
                        <NavLink to={PATH.MAIN}>Main</NavLink>
                        <NavLink to={PATH.CATEGORY}>Category Movies</NavLink>
                        <NavLink to={PATH.FILTERED}>Filtered Movies</NavLink>
                        <NavLink to={PATH.SEARCH}>Search</NavLink>
                        <NavLink to={PATH.FAVORITES}>Favorites</NavLink>
                    </div>

                    <Switch checked={themeMode === 'dark'} onChange={changeTheme} />
                </Container>
            </Toolbar>
        </AppBar>
    )
}