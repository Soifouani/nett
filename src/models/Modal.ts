export default interface Modal {
    isOpen: boolean;
    onConfirm: () => void;
    text: string;
}