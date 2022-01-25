
export default {
    width: () => {
        const screen = window.screen.width;
        return screen <= 380 ? 'mobile' : 'desktop';
    }
}