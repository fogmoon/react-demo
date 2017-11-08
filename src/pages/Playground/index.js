import React from 'react'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import { Header, Container } from 'components'
import { PlayStyledComponents } from 'pages'

export default (props) => {
  const { match } = props
  return (
    <div>
      <Header />
      <Container>

        {/* 左側功能選單 */}
        <Container.SideBar>
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <NavLink className='nav-link' to={`${match.url}/StyledComponents`} activeClassName='active'> styled-components </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={`${match.url}/B`} activeClassName='active'> B Function </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={`${match.url}/C`} activeClassName='active'> C Function </NavLink>
            </li>
          </ul>
        </Container.SideBar>

        {/* 功能顯示區塊 */}
        <Container.Content>
          <Switch>
            <Route path={`${match.url}/StyledComponents`} component={PlayStyledComponents} />
            <Route path={`${match.url}/B`} component={() => <div>BBBBBBBB</div>} />
            <Route path={`${match.url}/C`} component={() => <div>CCCCCCCC</div>} />
            <Redirect to={`${match.url}/StyledComponents`} /> {/* 預設頁面 */}
          </Switch>
        </Container.Content>

      </Container>
    </div>
  )
}
