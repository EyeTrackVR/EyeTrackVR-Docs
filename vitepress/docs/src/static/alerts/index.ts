const alerts = {
    user_warning: {
        type: 'warning',
        title: '',
        title_color: 'text-[orange]',
        text_color: 'text-slate-500 dark:text-slate-400',
        badge_content: 'CAUTION',
        content: 'This project is in active development. However, it is working for most users',
    },

    led_power_warning: {
        type: 'danger',
        title: 'Please pay attention',
        title_color: 'text-[red]',
        text_color: 'text-orange-400 dark:text-orange-500',
        badge_content: 'WARNING',
        content: 'Make sure you are using non-focused emitters and at around 5ma total power',
    }
}

export { alerts }