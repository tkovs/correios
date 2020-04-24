import reject from 'lodash/reject'
import find from 'lodash/find'

import * as types from '../actions/packets/types'
import mockPackets from '../../__mocks__/packets'

const initialState = {
  list: mockPackets,
  statusList: [],
  deleted: null,
}

const packets = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PACKET_PENDING:
    case types.UPDATE_PACKET_PENDING: {
      const packetStatus = {
        code: action.payload.packet.code,
        pending: true,
        error: null,
      }

      return {
        ...state,
        statusList: [...state.statusList, packetStatus],
        deleted: null,
      }
    }
    case types.ADD_PACKET_SUCCESS: {
      const { code } = action.payload.packet

      return {
        ...state,
        list: [...state.list, action.payload.packet],
        statusList: reject(state.statusList, { code }),
      }
    }
    case types.ADD_PACKET_FAILURE:
    case types.UPDATE_PACKET_FAILURE: {
      const { code, error } = action.payload

      return {
        ...state,
        statusList: [...reject(state.statusList, { code }), { code, error }],
      }
    }
    case types.UPDATE_PACKET_SUCCESS: {
      const { code } = action.payload.packet

      return {
        ...state,
        list: [...reject(state.list, { code }), action.payload.packet],
        statusList: reject(state.statusList, { code }),
      }
    }
    case types.REMOVE_PACKET: {
      const { code } = action.payload

      return {
        ...state,
        list: reject(state.list, { code }),
        deleted: find(state.list, { code }),
      }
    }
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default packets
