import { useEffect } from "react";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import requestApi from "../../helpers/requestApi";
import { toast } from "react-toastify";
import CreditCard from "../../components/CreditCard";

export default function Cards(){
    const [cards, setCards] = useState([])
    

    useEffect(() => {// Buscar os cartões salvos na API
        async function getCards(){// Função para buscar os cartões
            try {
                const response = await requestApi({// Requisição para buscar os cartões
                    url: "/creditcards",
                method: "GET"
                })

                setCards(response.data)    
            } catch (error) {
                toast.error("Erro ao buscar os cartões!")
            }
            
        }

        getCards()
    }, []) 

    return (
        <div className="min-h-screen bg-[#f0f4fa] p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b447eb] hover:text-white">
                                <LuArrowLeft size={20}/>    
                            </button>                     
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-[#121721] flex items-center gap-2">
                                <CiCreditCard1 size={40} color="#2a6df4"/>
                                Meus Cartões
                            </h1>
                            <p className="text-gray-500 text-sm mt-1">
                                {cards.length} cartões cadastrados
                            </p>
                        </div>
                    </div>
                    <Link to="/">
                        <button className="w-auto px-4 h-10 bg-[#2a6df4] rounded-lg text-white flex items-center gap-2 font-semibold ">
                            <CiCreditCard1 size={24} />
                            Adicionar cartão
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {cards.map((card) => {
                            return (
                                <div key={card._id} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#e2e4e980] hover:border-[#2a6df4]/30 transition-all duration-300 easy-in-out cursor-pointer hover:shadow-lg">
                                    <CreditCard
                                        name={card.name}
                                        number={card.number.replace(/(.{4})/g, "$1 ").trim()}
                                        expiration={card.expiration}
                                        cvv={card.cvv}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}