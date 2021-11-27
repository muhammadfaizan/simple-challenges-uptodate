// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
// 
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
// 
// For example, we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function(data) {
    //TODO implement me
    for (let i = 0; i < (data.length - 3); i++) {
        const currSq = data.slice(i, i + 3)
        for (let j = i + 3; j < (data.length - 3); j++) {
            const comparedSq = data.slice(j, j + 3)
            if (currSq[0] === comparedSq[0] && currSq[1] === comparedSq[1] && currSq[2] === comparedSq[2]) {
                return true
            }
            
        }
        
    }
    return false
}