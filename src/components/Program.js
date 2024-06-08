const Program = ({ pdata }) => {
    return (
        <div className="flex mb-6 items-center">
            <div className="mr-4 ">
                {pdata.logo}
            </div>
            <div className="text-left">
                <h1 className="text-xl font-bold mb-1">{pdata.progName}</h1>
                <h4 className="text-md">{pdata.description}</h4>
            </div>
        </div>
    );
}

export default Program;
