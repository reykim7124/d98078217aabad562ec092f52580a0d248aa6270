import { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${props => props.text};
`

const ModalContainer = styled.div`
  border-radius: 15px 15px 0 0;
  height: 90vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.bg};
  transition: height .2s ease-in-out;
  
`

const ModalButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-family: sans-serif;
  color: ${props => props.text};
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  cursor: pointer;
`

const LocationInput = styled.input.attrs(() => ({ type: 'text' }))`
  border: 2px solid ${props => props.outline};
  width: 100%;
  display: block;
  margin: 16px 0;
  padding: 4px 8px 4px 48px;
  height: 48px;
  box-sizing: border-box;
  font-size: 1rem;
  caret-color: ${props => props.lightRed};
  border-radius: 5px;
  &:focus {
    outline-color: ${props => props.outline};
  }
`

const InputPlaceIcon = styled.div`
  color: ${props => props.lightRed};
  position: absolute;
  top: 12px;
  left: 12px;
`

const ListIcon = styled.i`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #e2e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.subText};
  min-width: 32px;
`

const ModalList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;

  & .modal-item--name {
    font-weight: 600;
  }

  & .modal-item--street {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 16px;
    max-width: 295px;
  }
`

function Modal(props) {
  const locations = [
    {
      name: 'Kulina',
      street: 'Gedung Kulina, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190'
    },
    {
      name: 'Kulina',
      street: 'Gedung Kulina, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190'
    },
    {
      name: 'Kulina',
      street: 'Gedung Kulina, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190'
    },
    {
      name: 'Kulina',
      street: 'Gedung Kulina, Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190'
    }
  ]

  return (
    <div>
      {props.toggle && 
        <ModalWrapper text={props.text}>
          <ModalContainer bg={props.bg}>
            <div style={{display: 'flex', padding: '8px 16px'}}>
              <i style={{marginLeft: 'auto', cursor: 'pointer', fontSize: '2rem'}} className='material-icons' onClick={props.close}>close</i>
            </div>

            <div style={{padding: '16px'}}>
              <h2 style={{margin: '0'}}>Cek makanan yang tersedia di lokasi kamu</h2>

              <div style={{position: 'relative'}}>
                <InputPlaceIcon className='material-icons' lightRed={props.lightRed}>location_on</InputPlaceIcon>
                <LocationInput outline={props.outline} lightRed={props.lightRed} />
              </div>

              <div style={{paddingLeft: '8px', paddingTop: '8px'}}>
                { locations.map((item, i) => (
                  <div key={i} style={{display: 'flex', marginTop: '16px'}}>
                    <ListIcon subText={props.subText}>
                      <i className='material-icons'>place</i>
                    </ListIcon>
                    <ModalList outline={props.outline}>
                      <span className='modal-item--name'>{ item.name }</span>
                      <span className='modal-item--street'>{ item.street }</span>
                      <div style={{borderBottom: `1px solid ${props.outline}`}}></div>
                    </ModalList>
                  </div>
                )) }
              </div>
            </div>
          </ModalContainer>
        </ModalWrapper>
      }
    </div>
  )
}

class ModalLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    const setModal = !this.state.modal
    this.setState({
      modal: setModal
    })
  }

  render() {
    const { text, subText, lightRed, bg, outline } = this.context
    return (
      <div>
        <ModalButton text={text} onClick={this.toggleModal}>
          <label style={{fontSize: '0.75rem', color: subText}}>ALAMAT PENGANTARAN</label>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <label style={{fontWeight: '600'}}>Tokopedia Tower</label>
            <i className='material-icons' style={{color: lightRed, fontSize: '1.75rem'}}>expand_more</i>
          </span>
        </ModalButton>
        <Modal toggle={this.state.modal} close={() => this.toggleModal()} bg={bg} text={text} outline={outline} lightRed={lightRed} subText={subText} />
      </div>
    )
  }
}

ModalLocation.contextType = ThemeContext
export default ModalLocation