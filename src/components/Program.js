const Program = ({ pdata }) => {
    return (
        <div className="flex mb-4">
            <div>
                <img src={pdata.logo} alt={`${pdata.progName} logo`} className="w-12 h-12" />
            </div>
            <div className="ml-6 mr-3 text-left">
                <h1 className="text-xl font-bold mb-2">{pdata.progName}</h1>
                <h4 className="text-md">{pdata.description}</h4>
            </div>
        </div>
    );
}

export default Program;