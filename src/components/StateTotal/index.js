import {Component} from 'react'
import './index.css'

class StateTotal extends Component {
  state = {covidData: []}

  componentDidMount() {
    this.getEachState()
  }

  getEachState = async () => {
    const {eachStateTotalData} = this.props

    const totalConfirmed = eachStateTotalData.confirmed
    const totalRecovered = eachStateTotalData.recovered

    const totalDeceased = eachStateTotalData.deceased

    const totalActive = totalConfirmed - totalRecovered - totalDeceased

    const updated = [
      {
        name: 'Confirmed',
        logo:
          'https://res.cloudinary.com/dffpcgabr/image/upload/v1628576966/icons/y0aw5gwjsuag5sujtfxr.png',
        value: totalConfirmed,
      },
      {
        name: 'Active',
        logo:
          'https://res.cloudinary.com/dffpcgabr/image/upload/v1628576985/icons/ugvd8rdkl7blhikjtko9.png',
        value: totalActive,
      },
      {
        name: 'Recovered',
        logo:
          'https://res.cloudinary.com/dffpcgabr/image/upload/v1628577002/icons/upjeeldrihcivjvttbpf.png',
        value: totalRecovered,
      },
      {
        name: 'Deceased',
        logo:
          'https://res.cloudinary.com/dffpcgabr/image/upload/v1628577021/icons/qvoumiel3qqpjexmxbwk.png',
        value: totalDeceased,
      },
    ]
    this.setState({covidData: updated})
  }

  onGetTotal = value => {
    const {onGetCategory} = this.props
    onGetCategory(value)
  }

  render() {
    const {covidData} = this.state
    return (
      <div className="cat">
        <ul className="total-category-container">
          {covidData.map(each => (
            <li
              className={`category-item ${each.name}`}
              tabIndex="-1"
              key={each.name}
              value={each.name}
              onClick={() => this.onGetTotal(each.name)}
            >
              <h1 className="category-name">{each.name}</h1>
              <img src={each.logo} alt={each.name} />
              <h1 className="category-value">{each.value}</h1>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default StateTotal
