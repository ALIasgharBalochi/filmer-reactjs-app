
import ButtonSwitched from "../ButtonSwItched"
const RowControler = ({title,switched,setSwitched}) => {
    return(
      <div className='div-text-p pointer' >
        <p>{title}</p> <ButtonSwitched switched={switched} setSwitched={setSwitched} />
      </div>
    )
}
export default RowControler;