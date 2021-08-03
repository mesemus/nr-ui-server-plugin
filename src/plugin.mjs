export const UIPlugin = {
    layouts: {
        defaultLayout: {
            component: () => import('./layouts/DefaultLayout.vue')
        }
    },
    pages: [
        {
            component: () => import('./pages/Landing.vue'),
            usages: [
                {
                    type: 'landing',
                }
            ],
        }
    ]
}
