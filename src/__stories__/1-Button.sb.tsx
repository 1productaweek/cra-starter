import React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
}

export const Text = () => <button onClick={action('clicked')}>Hello Button 2</button>
