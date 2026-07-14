// JavaScript solution for 2026-04-13
// Name Initials
function getInitials(name) {
    return name.split(' ').map(n => n[0].toUpperCase()).join('.') + '.';
}