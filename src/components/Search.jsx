import "../styles/Search.css";

function Search({searchTerm, setSearchTerm}){
    return(
        <div className="search-section"> 
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    );
}