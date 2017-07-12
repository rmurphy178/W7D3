selected_guests = []
@guests.each do |guest|
  if guest.age >= 40 && guest.age <= 50
    selected_guests << guest
  end
end

json.array! @guests.where('age > 40 AND age < 50') do |guest|
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
