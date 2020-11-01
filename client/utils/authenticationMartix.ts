import routes from '../routes'

const anonymous = null

const roleMatrix = {
  [routes.login.value]: [anonymous],
//   [routes.product.value]: ['extranet']
}

function getRoles(pathname: string) {
  return roleMatrix[pathname]
}

export function canAccessBy(currentRole: null, pathname: string) {
  const roles = getRoles(pathname)
  return roles.some(role => role === currentRole)
}

export function verifyUserPermission(userRoles: string[], sitename: string) {
  if (Array.isArray(userRoles)) {
    return userRoles.some(role => role.includes(sitename) || role.includes('admin'))
  }
  return false
}
