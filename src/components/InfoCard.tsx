type InfoCardProps = {
    id: string
    mainText: string,
    secondaryText: string,
    logoPath: string
}

function InfoCard({id, mainText, secondaryText, logoPath}: InfoCardProps) {
    return (
        <div id={id} className="border-1 h-56px w-3xs p-2 rounded-md">
            <h4 className="font-bold">{mainText}</h4>
            <p>{secondaryText}</p>
        </div>
    )
}

export default InfoCard;