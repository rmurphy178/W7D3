selected_guests = []
@guests.each do |guest|
  if guest.age >= 40 && guest.age <= 50
    selected_guests << guest
  end
end


json.array! do
  selected_guests.each do |guest|
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
  end
end
