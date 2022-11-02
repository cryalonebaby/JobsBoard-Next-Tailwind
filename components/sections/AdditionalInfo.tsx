import BenefitBox from '../elements/BenefitBox'
import SectionTitle from '../elements/SectionTitle'

interface IProps {
  types: string[],
  benefits: string[]
}

const AdditionalInfo = ({types, benefits}: IProps) => {
  return (
    <div className="mt-20">
      <SectionTitle title="Additional info" />
      <div className="flex flex-col gap-[23px] mt-[15px]">
        <div className="flex flex-col gap-[10px]">
          <p>Employment type</p>
          <div className="flex gap-2">
            {types.map((type, i) => (
              <BenefitBox
                key={i}
                text={type}
                isBlue={true}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Benefits</p>
          <div className="flex gap-2">
            {benefits.map((benefit, i) => (
              <BenefitBox
                key={i}
                text={benefit}
                isBlue={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo