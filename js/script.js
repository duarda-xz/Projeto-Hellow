function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat:-26.91526931050936, lng:-49.08467740306932, titulo: 'Evento 1', descricao: 'Descrição do Evento 1' },
        { lat:-26.91512977686112, lng:-49.08449214724819, titulo: 'Evento 2', descricao: 'Descrição do Evento 2' },
        { lat: -26.804737684708762, lng: -49.087991716565426, titulo: 'Evento 3', descricao: 'Descrição do Evento 3' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}