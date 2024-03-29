const commonroute = (app, dynamicWrapper) => ({
  '/LsShop':{  component: dynamicWrapper(app, [], () => import('../routes/LsShop')),  },
  '/LsShop/list': {  component: dynamicWrapper(app, [], () => import('../routes/LsShop/List')),  },
  '/LsShop/info': {  component: dynamicWrapper(app, [], () => import('../routes/LsShop/Info')),  },
  '/SpDiscount':{  component: dynamicWrapper(app, [], () => import('../routes/SpDiscount')),  },
  '/SpDiscount/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpDiscount/List')),  },
  '/SpDiscount/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpDiscount/Info')),  },
  '/SpShop':{  component: dynamicWrapper(app, [], () => import('../routes/SpShop')),  },
  '/SpShop/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpShop/List')),  },
  '/SpShop/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpShop/Info')),  },
  '/SpShopuser':{  component: dynamicWrapper(app, [], () => import('../routes/SpShopuser')),  },
  '/SpShopuser/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpShopuser/List')),  },
  '/SpShopuser/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpShopuser/Info')),  },
  '/SpTeam':{  component: dynamicWrapper(app, [], () => import('../routes/SpTeam')),  },
  '/SpTeam/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpTeam/List')),  },
  '/SpTeam/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpTeam/Info')),  },
  '/SpTeamuser':{  component: dynamicWrapper(app, [], () => import('../routes/SpTeamuser')),  },
  '/SpTeamuser/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpTeamuser/List')),  },
  '/SpTeamuser/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpTeamuser/Info')),  },
  '/SpUser':{  component: dynamicWrapper(app, [], () => import('../routes/SpUser')),  },
  '/SpUser/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpUser/List')),  },
  '/SpUser/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpUser/Info')),  },
  '/SpUser2shop':{  component: dynamicWrapper(app, [], () => import('../routes/SpUser2shop')),  },
  '/SpUser2shop/list': {  component: dynamicWrapper(app, [], () => import('../routes/SpUser2shop/List')),  },
  '/SpUser2shop/info': {  component: dynamicWrapper(app, [], () => import('../routes/SpUser2shop/Info')),  },
  '/DragMap': {  component: dynamicWrapper(app, [], () => import('../routes/DragMap')),  },
});

export default commonroute;
