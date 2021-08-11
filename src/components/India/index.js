import objectPath from 'object-path'
import {Component} from 'react'
import './index.css'

class India extends Component {
  state = {covidData: []}

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )
    const data = await response.json()

    const {TT} = data
    const {total} = TT
    const {confirmed} = total

    const totalConfirmed = confirmed
    const totalRecovered = Object.keys(data)
      .filter(state => state === 'TT')
      .map(e => objectPath.get(data, `${e}.total.recovered`))

    const totalDeceased = Object.keys(data)
      .filter(state => state === 'TT')
      .map(e => objectPath.get(data, `${e}.total.deceased`))
    const totalOther = Object.keys(data)
      .filter(state => state === 'TT')
      .map(e => objectPath.get(data, `${e}.total.other`))

    const totalActive =
      totalConfirmed - totalRecovered - totalDeceased - totalOther

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

  render() {
    const {covidData} = this.state
    return (
      <div className="cat">
        <ul className="total-category-container">
          {covidData.map(each => (
            <li
              className={`category-item ${each.name}1`}
              tabIndex="-1"
              key={each.name}
              value={each.name}
            >
              <h1 className="category-name">{each.name}</h1>
              <img src={each.logo} alt={each.name} className="logo" />
              <h1 className="category-value">{each.value}</h1>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default India
