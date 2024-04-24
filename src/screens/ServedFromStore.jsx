import React from 'react';
import useNasaStore from '../store/nasaStore';
import DisplayCard from "../components/displayCard/index";
import Loading from "../components/Loading";

function ServedFromStore() {
    const { data, isLoading } = useNasaStore();

    return (
        <div className="second-page">
            <h1 style={{textAlign:'center',color:'#00579a'}}>Data from Store</h1>
            {isLoading ? (
                <Loading />
            ) : (
                Array.isArray(data) ? (
                    data && data?.length && data.map(item => <DisplayCard key={item.date} data={item} />)
                ) : (
                    data ? <DisplayCard key={data.date} data={data} /> : null
                )
            )}
        </div>
    );
}

export default ServedFromStore;
