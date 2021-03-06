// @flow

function invariant(item: any, message?: string): any {
    if (!item) {
        throw new Error(message ? message : "Invariant failed.");
    }

    return item;
}

export default invariant;