var _fakeServerApi = {
    increaseCount: (currentCount, cb) => setTimeout(() => cb(currentCount++), 2000)
};