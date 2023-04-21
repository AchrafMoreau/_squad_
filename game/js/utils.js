function collision(object1, object2) {
    return (
        object1.position.y + object1.height >= object2.positionY &&
        object1.position.y <= object2.positionY + object2.height &&
        object1.position.x + object1.width >= object2.positionX &&
        object1.position.x <= object2.positionX + object2.width
    )
}