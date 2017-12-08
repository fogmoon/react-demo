import React from 'react'
import { Redirect, NavLink, Switch } from 'react-router-dom'
import { Container } from 'components'
import { PlayStyledComponents, PlayIntlUniversal, PlayReduxForm } from 'pages'
import { PrivateRoute } from 'containers'

export default (props) => {
  const { match } = props

  return <Container>

    {/* 左側功能選單 */}
    <Container.SideBar>
      <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
          <NavLink className='nav-link' to={`${match.url}/StyledComponents`} activeClassName='active'> styled-components </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to={`${match.url}/PlayIntlUniversal`} activeClassName='active'> react-intl-universal </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to={`${match.url}/PlayReduxForm`} activeClassName='active'> redux-form </NavLink>
        </li>
      </ul>
    </Container.SideBar>

    {/* 功能顯示區塊 */}
    <Container.Content>
      <Switch>
        <PrivateRoute path={`${match.url}/StyledComponents`} component={PlayStyledComponents} />
        <PrivateRoute path={`${match.url}/PlayIntlUniversal`} component={PlayIntlUniversal} />
        <PrivateRoute path={`${match.url}/PlayReduxForm`} component={PlayReduxForm} />
        <Redirect to={`${match.url}/StyledComponents`} /> {/* 預設頁面 */}
      </Switch>
    </Container.Content>

  </Container>
}
