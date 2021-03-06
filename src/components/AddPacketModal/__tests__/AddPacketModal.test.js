import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AddPacketModal from '../AddPacketModal'

const mockOnDismiss = jest.fn()
const mockOnSubmit = jest.fn()

describe('AddPacketModal', () => {
  it('renders correctly', () => {
    const mockPending = false
    const mockVisible = true
    const mockError = null

    const { baseElement } = render(
      <AddPacketModal
        error={mockError}
        onDismiss={mockOnDismiss}
        onSubmit={mockOnSubmit}
        pending={mockPending}
        visible={mockVisible}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
