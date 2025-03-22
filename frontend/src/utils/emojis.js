export const getRandomEmoji = () => {
    const funEmojis = [ "😊", "😂", "🤣", "😍", "🥳", "🎉", "🔥", "💯", "✨", "🌟", 
        "🍕", "🍔", "🚀", "🌈", "🦄", "🐱", "🐶", "🐼", "🦁", "🐧", 
        "🦋", "🌺", "🌻", "🍀", "🍁", "🍂", "🍃", "🍄", "🌍", "🌎", 
        "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", 
        "⭐", "🌟", "🌠", "⚡", "☄️", "💥", "💫", "💨", "💦", "💧", 
        "🌊", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", 
        "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", 
        "🥦", "🥬", "🥒", "🌶️", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", 
        "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🥞", "🧇", 
        "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕", "🥪", 
        "🥙", "🧆", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", 
        "🍛", "🍣", "🍱", "🥟", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", 
        "🥮", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", 
        "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", 
        "🥛", "🍼", "☕", "🍵", "🧃", "🥤", "🍶", "🍺", "🍻", "🥂", 
        "🍷", "🥃", "🍸", "🍹", "🍾", "🧊", "🥄", "🍴", "🍽️", "🥢", 
        "🧂", "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", 
        "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", 
        "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛼"];
    return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};