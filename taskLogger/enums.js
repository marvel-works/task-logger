const STATUS = {
    PENDING: 'pending',
    RUNNING: 'running',
    SUCCESS: 'success',
    ERROR: 'error',
    SKIPPED: 'skipped',
    PENDING_APPROVAL: 'pending-approval',
    APPROVED: 'approved',
    DENIED: 'denied',
    TERMINATING: 'terminating',
    TERMINATED: 'terminated',
    ELECTED: 'elected',
    FAILURE: 'failure',
};

const TYPES = {
    FIREBASE: 'firebase',
    REDIS: 'redis',
    MONGO: 'mongo',
    COMPOSE: 'composition'
};

const VISIBILITY = {
    PUBLIC: 'public',
    PRIVATE: 'private'
};

module.exports = {
    STATUS,
    TYPES,
    VISIBILITY
};
