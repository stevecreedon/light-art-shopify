require 'rubygems'
require 'shopify_api'

DATA = YAML.load_file("metafields.yml")

def match_product(product)
  DATA.each do |key, value|
    puts value["product"]["name"].downcase
    return value if product.title.downcase.include?(value["product"]["name"].downcase)
  end
  nil
end

def metafield(namespace, key, value)
  ShopifyAPI::Metafield.new(:description => 'auto generated', :namespace => namespace, :key => key, :value => value, :value_type => 'string')
end

ShopifyAPI::Base.site = 'https://d2fd6ff259af9c993f1430020bb4e47e:d72bd29c56cc3c4a964178c222f917c1@kidslight.myshopify.com/admin'

products = ShopifyAPI::Product.find(:all, :ssl => true)

products.each do |product|
  data = match_product(product)
  puts "unable to find data for #{product.title}" unless data
  next unless data
  product.metafields.clear
  data.each do |namespace, nsvalue|
      nsvalue.each do |key, value|
        product.add_metafield(metafield(namespace, key, value))
      end
  end
end

