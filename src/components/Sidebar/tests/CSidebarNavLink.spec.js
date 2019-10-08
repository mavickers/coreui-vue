import { mount } from '@vue/test-utils'
import Component from '../CSidebarNavLink'

const ComponentName = 'CSidebarNavLink'
const wrapper = mount(Component, {
  attachToDocument: true,
  propsData: {
    name: 'test link',
    icon: 'cui-settings',
    badge: {
      variant: 'success',
      textHtml: 'NEW'
    }
  },
  attrs: {
    id: 'link'
  }
})

describe(`${ComponentName}.vue`, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('emits link-clicked event when clicked', () => {
    // cannot trigger native click
    // wrapper.find('a').trigger('click')
    wrapper.vm.click()
    expect(wrapper.emitted()['link-clicked']).toBeTruthy()
  })
})