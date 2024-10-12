import React from 'react';

const page = ({ params }) => {

    console.log(params.features[1]);

    if (params.features.length == 3) {
        return (
            <div>
                {params.features[1]}
            </div>
        )
    }

    return (
        <div>
            categories details
        </div>
    );
};

export default page;