import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "./CustomInput";
import { BiLock } from "react-icons/bi";
import CustomButton from "./CustomButton";


export default function PaymentForm(){
    return (
        <form className="space-y-6">
            <CustomInput
                label = "Número do cartão" 
                type = "text"
                placeholder = "0000 0000 0000 0000"
                icon = {<CiCreditCard1 />}
            />
            <CustomInput
                label = "Nome do titular"
                type = "text" 
                placeholder = "COMO APARECE NO CARTÃO"
            />

            <div className="grid grid-cols-2 gap-4">
                <CustomInput
                    label = "Validade"
                    type = "text"
                    placeholder="MM/AA"
                />

                <CustomInput
                    label = "CVV"
                    type = "text"
                    placeholder="•••"
                    rightIcon = {<BiLock />}
                />
            </div>

            <CustomButton>
                <BiLock />
                Pagar agora
            </CustomButton>
        </form>
    )
}