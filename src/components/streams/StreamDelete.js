import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
    //* React Fragment is a wrapper that does not have impact on dom
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => {
                    history.push("/");
                }}
            />
        </div>
    );
};

export default StreamDelete;
