const subject = require ('.'); 

describe('Bot protection', () => {

    it('should detect bot from logged actions', () => {
        const actions = [
            "left", 
            "right", 
            "fire", 
            "jump", 
            "fire", 
            "back", 
            "forward", 
            "forward", 
            "jump", 
            "fire", 
            "back", 
            "left", 
            "left", 
            "right"
        ];
        expect(subject.botProtection(actions)).toEqual(true);
    });
    it('should detect legit player from logged actions', () => {
        const actions = [
            "left", 
            "right", 
            "fire", 
            "jump", 
            "fire", 
            "back", 
            "forward", 
            "forward", 
            "jump", 
            "fire", 
            "left", 
            "left", 
            "right"
        ];
        expect(subject.botProtection(actions)).toEqual(false);
    });
    it('should not log with empty actions', () => {
        const actions = [];
        expect(subject.botProtection(actions)).toEqual(false);
    });

});